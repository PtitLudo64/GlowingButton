// personnalisation de l'effet glow du css. Le parametre rx des rect n'est pas pris en compte dans Safari.

const glowEffectRx = () => {
    const glowEffects = document.querySelectorAll('.glow-effect');

    glowEffects.forEach(glowEffect => {
        const glowLines = glowEffect.querySelectorAll('rect');
        const rx = getComputedStyle(glowEffect).borderRadius;
        glowLines.forEach(line => {
            line.setAttribute('rx', rx);
        });
    })
}

glowEffectRx();