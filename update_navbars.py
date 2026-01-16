import os
import re

files_to_update = [
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\AboutBreeds.jsx",
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\AboutUs.jsx",
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\CareGuide.jsx",
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\ContactUs.jsx",
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\DeliveryShipping.jsx",
    r"c:\xampp\htdocs\ParrotNest\resources\js\Pages\FeedingTips.jsx",
]

import_statement = "import PublicNavbar from '@/Components/PublicNavbar';\n"
navbar_component = "<PublicNavbar auth={auth} />"

for file_path in files_to_update:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add Import if not present
    if "import PublicNavbar" not in content:
        # Find where to insert import. Usually after the last import.
        last_import = 0
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                last_import = i
        
        lines.insert(last_import + 1, "import PublicNavbar from '@/Components/PublicNavbar';")
        content = '\n'.join(lines)

    # Replace Header
    # Pattern: <header ... > ... </header>
    # We use regex with dotall.
    # We match <header className="bg-white ..."> or just <header ...>
    # Note: Header usually starts with <header and ends with </header>.
    # Be careful not to replace headers inside headers (not happening here)
    
    pattern = re.compile(r'<header.*?>.*?</header>', re.DOTALL)
    
    match = pattern.search(content)
    if match:
        print(f"Replacing header in {file_path}")
        content = pattern.sub(navbar_component, content, count=1)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
    else:
        print(f"Header not found in {file_path}")
