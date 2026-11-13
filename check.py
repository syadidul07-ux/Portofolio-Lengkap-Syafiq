"""Check deployable assets, anchors and source syntax without browser dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import subprocess
import xml.etree.ElementTree as ET

root = Path(__file__).parent
dist = root / 'dist'
class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.urls = []
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs: self.ids.append(attrs['id'])
        for key in ('src', 'href'):
            if key in attrs: self.urls.append(attrs[key])

html = (dist / 'index.html').read_text()
doc = Document()
doc.feed(html)
assert len(doc.ids) == len(set(doc.ids)), 'Duplicate IDs'
for section in ('Home', 'About', 'Portofolio', 'Contact'):
    assert section in doc.ids, f'Missing section {section}'
for url in doc.urls:
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc: continue
    if parsed.path:
        assert (dist / unquote(parsed.path)).is_file(), f'Missing asset {url}'
    elif parsed.fragment:
        assert parsed.fragment in doc.ids, f'Broken anchor {url}'
assert '<!-- ABOUT_SECTION -->' not in html and '<!-- WORK_SECTIONS -->' not in html
assert 'Syafiq Syadidul Azmi' in html
for stale in ('Eka Wahyu Maulidan', 'ekawahyu-project', 'Lorem ipsum'):
    assert stale not in html, f'Stale profile content: {stale}'
for script in dist.glob('*.js'):
    subprocess.run(['node', '--check', str(script)], check=True)
for svg in (dist / 'assets').glob('*.svg'):
    tree = ET.parse(svg)
    for element in tree.iter():
        assert not element.tag.endswith('script'), f'Script in asset {svg.name}'
        assert all(not key.lower().startswith('on') for key in element.attrib), f'Event handler in {svg.name}'
pdf = dist / 'assets' / 'CV_Syafiq_Syadidul_Azmi.pdf'
assert pdf.read_bytes().startswith(b'%PDF-')
print(f'Passed: {len(doc.ids)} unique anchors, {len(doc.urls)} asset/link references, JavaScript syntax, SVG safety, CV PDF.')
