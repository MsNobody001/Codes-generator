const chars = 'ABCDEFGHIJ0123456789'.split('');

const codesNumber = 1000;
const charsNumber = 10;

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            charIndex = Math.floor(Math.random() * chars.length);
            code += chars[charIndex];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGenerator);