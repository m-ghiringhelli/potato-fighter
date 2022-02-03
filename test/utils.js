export function renderPotato(potatoObject) {
    //create div
    const div = document.createElement('div');
    div.classList = 'potato';
    div.id = `potato-${potatoObject.id}`;
    //create name
    const p = document.createElement('p');
    p.textContent = `${potatoObject.name}`.toUpperCase();
    //create image
    const img = document.createElement('img');
    img.src = './assets/potato.png';
    img.classList = 'potato-picture';
    //create HP
    const p2 = document.createElement('p');
    p2.textContent = `${potatoObject.hp} HP`;
    //build potato
    div.append(p, img, p2);
    return div;
}