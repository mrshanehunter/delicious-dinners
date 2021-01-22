import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar

export default function Sidebar() {
  return S.list()
    .title(`Delicious Dinners`)
    .items([
      // Create a new sub-item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>X</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Create the document id rather than accept a random string
            .documentId('Main_Kitchen')
        ),
      // Then fill the rest of the sidebar with original docs
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
