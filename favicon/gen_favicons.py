from PIL import Image
import base64
import os

# Open the previously cropped perfect square favicon
img = Image.open('public/favicon.png')

# 96x96 PNG
img.resize((96, 96), Image.Resampling.LANCZOS).save('public/favicon-96x96.png')

# 180x180 Apple Touch Icon
img.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png')

# ICO file (multiple sizes)
img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# SVG with embedded base64 PNG
with open('public/favicon.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="248" height="248">
  <image href="data:image/png;base64,{b64}" width="248" height="248"/>
</svg>'''
with open('public/favicon.svg', 'w') as f:
    f.write(svg_content)

# Web app manifest
manifest_content = '''{
  "name": "Elvitra Elevators",
  "short_name": "Elvitra",
  "icons": [
    {
      "src": "/favicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}'''
with open('public/site.webmanifest', 'w') as f:
    f.write(manifest_content)
