const modules = import.meta.glob(
    "../assets/types/*.svg",
    {
        eager: true,
        import: "default",
    }
);

const typeIcons = {};

for (const [path, icon] of Object.entries(modules)) {
    const name = path
        .split("/")
        .pop()
        .replace(".svg", "");

    typeIcons[name] = icon;
}

export default typeIcons;