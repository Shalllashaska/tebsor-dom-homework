/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let el = document.createElement(tag);
        el.insertAdjacentHTML('afterbegin', content);
        document.body.append(el);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let tree = document.createElement('div');
    tree.className = 'item_1';
    let count = 1;
    document.body.append(tree);

    recus(count, tree);

    function recus(currentLevel, el) {
        currentLevel++;
        for (let i = 0; i < childrenCount; i++) {
            let node = document.createElement('div');
            node.className = 'item_' + currentLevel;
            el.append(node);
            if (currentLevel != level) {
                recus(currentLevel, node);
            }
        }
    }

    return tree;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let l = tree.childNodes.length;
    for (let j = 0; j < l; j++) {
        let element = tree.firstChild;
        let newEl = document.createElement('section');
        let length = element.childNodes.length;
        for (let i = 0; i < length; i++) {
            newEl.append(element.firstChild);
        }
        newEl.className = element.className;
        element.remove();
        tree.append(newEl);
    }

    return tree;
}
