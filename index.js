// code your solution here
function superbowlWin(record) {
    for (const win of record) {
        if (win.result === 'W') {
        return win.year;
        }

    }


}
    

record.find(superbowlWin);