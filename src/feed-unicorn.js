function feedUnicorn(mockUnicorn, colorName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);

    mockUnicorn.appendChild(span);
}

export default feedUnicorn;