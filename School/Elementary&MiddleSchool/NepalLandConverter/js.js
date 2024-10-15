function convert() {
    let x = document.getElementById("unitAmount").value;  const fromUnit = document.getElementById('fromUnitSelector').value; const toUnit = document.getElementById('toUnitSelector').value; const output = document.getElementById('outputBox'); 
    a = [
        [
            [ x ],                // fromUnit == 1 && toUnit == 1 
            [ (x * 10.7639), 2 ], // fromUnit == 1 && toUnit == 2
            [ (x / 508.74), 4 ],  // fromUnit == 1 && toUnit == 3
            [ (x / 31.79), 4 ],   // fromUnit == 1 && toUnit == 4
            [ (x / 16.9), 4 ],    // fromUnit == 1 && toUnit == 5
            [ (x / 1.985), 4 ],   // fromUnit == 1 && toUnit == 6
        ],[
            [ (x / 10.7639), 4 ], // fromUnit == 2 && toUnit == 1
            [ x ],                // fromUnit == 2 && toUnit == 2
            [ (x / 5476), 4 ],    // fromUnit == 2 && toUnit == 3
            [ (x / 342.25), 4 ],  // fromUnit == 2 && toUnit == 4
            [ (x / 85.56), 4 ],   // fromUnit == 2 && toUnit == 5
            [ (x / 21.39), 4 ],   // fromUnit == 2 && toUnit == 6
        ],[
            [ (x * 508.74), 2 ],  // fromUnit == 3 && toUnit == 1
            [ (x * 5476), 2 ],    // fromUnit == 3 && toUnit == 2
            [ x ],                // fromUnit == 3 && toUnit == 3
            [ (x * 16), 2 ],      // fromUnit == 3 && toUnit == 4
            [ (x * 64), 2 ],      // fromUnit == 3 && toUnit == 5
            [ (x * 256), 2 ],     // fromUnit == 3 && toUnit == 6
        ],[
            [ (x * 31.79), 2 ],   // fromUnit == 4 && toUnit == 1
            [ (x * 342.25), 2 ],  // fromUnit == 4 && toUnit == 2
            [ (x / 16), 4 ],      // fromUnit == 4 && toUnit == 3
            [ x ],                // fromUnit == 4 && toUnit == 4
            [ (x * 4), 2 ],       // fromUnit == 4 && toUnit == 5
            [ (x * 16), 2 ],      // fromUnit == 4 && toUnit == 6
        ],[
            [ (x * 16.9), 2 ],    // fromUnit == 5 && toUnit == 1
            [ (x * 85.56), 2 ],   // fromUnit == 5 && toUnit == 2
            [ (x / 64), 4 ],      // fromUnit == 5 && toUnit == 3
            [ (x / 4), 4 ],       // fromUnit == 5 && toUnit == 4
            [ x ],                // fromUnit == 5 && toUnit == 5
            [ (x * 4), 2 ],       // fromUnit == 5 && toUnit == 6
        ],[
            [ (x * 1.985), 2 ],   // fromUnit == 6 && toUnit == 1
            [ (x * 21.39), 2 ],   // fromUnit == 6 && toUnit == 2
            [ (x / 256), 4 ],     // fromUnit == 6 && toUnit == 3
            [ (x / 16), 4 ],      // fromUnit == 6 && toUnit == 4
            [ (x / 4), 4 ],       // fromUnit == 6 && toUnit == 5
            [ x ],                // fromUnit == 6 && toUnit == 6
        ],
    ]
    let elmt = a[ fromUnit - 1 ][ toUnit - 1 ];
    let val = elmt[ 0 ];
    if (elmt[1]){ val = val.toFixed( elmt[ 1 ] ); }
    output.value = val;
}
