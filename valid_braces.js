
const validBraces = (braces) => {
    const pairs = { '(':')', '{':'}', '[':']' };
    let stack = [], current = "";

    for (let i = 0; i < braces.length; i++) {
        current = braces[i];

        if (pairs[current]) {
            stack.push(current)
        } else {
            if (current !== pairs[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0;

}

console.log(validBraces('[({})]'));