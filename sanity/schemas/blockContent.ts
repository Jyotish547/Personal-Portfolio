export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          // ... other styles
        ],
        // Add other block configuration like marks, lists, etc.
      },
      // You can add other types here, for example, images or embeds
    ],
  };