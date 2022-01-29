
function createXmasTree(height) {
    if (!Number.isInteger(height)) {
        return 'La altura debe ser un número';
    } else {
        if (height < 1 || height > 100) {
            return 'La altura debe ser entre 1 y 100';
        }

        let treeStr = '';

        const maxTreeWidth = 2 * height - 1;
        

        for (let index = 0; index < height; index++) {
            let treeLeaves = 2*index+1;
            let spaces = (maxTreeWidth - treeLeaves)/2;
            treeStr += `${'_'.repeat(spaces)}${'*'.repeat(treeLeaves)}${'_'.repeat(spaces)}\n`;
        }

        // Base
        treeStr += `${'_'.repeat(maxTreeWidth / 2)}#${'_'.repeat(maxTreeWidth / 2)}\n`;
        treeStr += `${'_'.repeat(maxTreeWidth / 2)}#${'_'.repeat(maxTreeWidth / 2)}`;

        return treeStr;
    }

    
}


console.log(createXmasTree(10));