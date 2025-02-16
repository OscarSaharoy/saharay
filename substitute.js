#!/usr/bin/env node

const fs = require("fs");

const template = fs.readFileSync( "./template.html", "utf-8" );
const contentPaths = fs.globSync( "./content/*" );

for( contentPath of contentPaths ) {
    const content = fs.readFileSync(contentPath, "utf-8" );
    const outputPath = contentPath.replace( "content/", "" );
    const output = template.replace( "<!-- sub_target -->", content );
    fs.writeFileSync( outputPath, output );
}
