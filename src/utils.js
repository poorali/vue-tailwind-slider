export function onClassChange(node, callback) {
    let lastClassString = node.classList.toString();

    const mutationObserver = new MutationObserver((mutationList) => {
        for (const item of mutationList) {
            if (item.attributeName === "class") {
                const classString = node.classList.toString();
                if (classString !== lastClassString) {
                    callback(mutationObserver);
                    lastClassString = classString;
                    break;
                }
            }
        }
    });

    mutationObserver.observe(node, { attributes: true });

    return mutationObserver;
}