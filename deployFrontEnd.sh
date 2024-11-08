#!/bin/bash

# Change directory to parent directory
echo "Step 0: Changing directory to the parent directory"
cd ..

# Remove all files from /files/custom_diagram directory
echo "Step 1: Removing all files from /files/custom_diagram directory"
rm -r files/custom_diagram/*

# Move all files, from /widget_designer/build/static to /files/custom_diagram directory
echo "Step 2: Moving all files, from /widget_designer/build/static to /files/custom_diagram directory"
find widget_designer/build/static/ -type f -exec cp --parents {} files/custom_diagram \;

cp -r widget_designer/build/static/media/ static/;

# Get the contents of /widget_designer/build/static/index.html
echo "Step 3: Getting the contents of /widget_designer/build/index.html"
html_content=$(cat widget_designer/build/index.html)

# Replace "/static/" with "/files/custom_diagram/" in the HTML content
echo "Step 4: Replacing \"/static/\" with \"/files/custom_diagram/\" in HTML content"
html_content=${html_content//\/static\//\/files\/custom_diagram\/widget_designer\/build\/static\/}

# Write the modified HTML content to /rest/templates/rest/custom_diagram_editor_page.html
echo "Step 5: Writing modified HTML content to /rest/templates/rest/custom_diagram_editor_page.html"
echo "$html_content" > rest/templates/rest/custom_diagram_editor_page.html

# Remove the /widget_designer/build directory
echo "Step 6: Removing the /widget_designer/build directory"
#rm -r widget_designer/build

echo "Done!"
