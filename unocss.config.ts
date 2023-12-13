import { defineConfig, presetUno, presetWebFonts, presetIcons } from "unocss";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetHeroPatterns(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'IBM Plex Sans',
                serif: 'IBM Plex Serif',
                mono: 'IBM Plex Mono'
            }
        })
    ]
});