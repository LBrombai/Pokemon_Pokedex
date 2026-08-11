const images = import.meta.glob("./items/*.{png,gif}", {
  eager: true,
  import: "default",
});

export function getItemImage(itemName) {
  for (const path in images) {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(png|gif)$/i, "");

    if (fileName === itemName) {
      return images[path];
    }
  }

  return null;
}