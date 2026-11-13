"""Assemble a dependency-free static portfolio."""
from pathlib import Path

root = Path(__file__).parent
html = (root / 'index.template.html').read_text()
html = html.replace('<!-- ABOUT_SECTION -->', (root / 'about-section.html').read_text())
html = html.replace('<!-- WORK_SECTIONS -->', (root / 'work-sections.html').read_text())
(root / 'dist' / 'index.html').write_text(html)
print('Built dist/index.html')
