import fs from "node:fs/promises";
import path from "node:path";

export async function downloadFile(url, destination) {
    await fs.mkdir(path.dirname(destination), {
        recursive: true,
    });

    try {
        await fs.access(destination);

        console.log(`⏩ ${path.basename(destination)} já existe.`);
        return "skipped";
    } catch {
        // O arquivo ainda não existe.
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro ao baixar ${url}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    await fs.writeFile(destination, buffer);

    console.log(`✔ Salvo: ${path.basename(destination)}`);

    return "downloaded";
}