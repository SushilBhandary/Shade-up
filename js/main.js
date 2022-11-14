function randompickerbtn() {
    const value = document.querySelector('#randomValuePara')
    const box = document.querySelector('#randomPicker')
    const rVal = [ '0', '1','2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex += rVal[Math.floor(Math.random()*16)]
    }
    value.innerHTML = hex
    box.style.backgroundColor = hex

}

function hexFindbtn() {
    const hexInput = document.querySelector('#hexInput').value 
    const box = document.querySelector('#color-box')
    box.style.backgroundColor = hexInput
}

function RGBFindbtn() {
    const RInput = document.querySelector('#RInput').value 
    const GInput = document.querySelector('#GInput').value 
    const BInput = document.querySelector('#BInput').value 
    const box = document.querySelector('#rgb-color-box')
    let rgb = 'rgb('+RInput+','+ GInput +',' +BInput+')'
    box.style.backgroundColor = rgb
}

function RangeSelector() {
    const RrInput = document.querySelector('#RrInput').value 
    const GrInput = document.querySelector('#GrInput').value 
    const BrInput = document.querySelector('#BrInput').value 
    const box = document.querySelector('#range-color-box')
    let rgb = 'rgb('+RrInput+','+ GrInput +',' +BrInput+')'
    box.style.backgroundColor = rgb

}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  
};

const val = {
    '0': 0,
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'A' : 10,
    'B' : 11,
    'C' : 12,
    'D' : 13,
    'E' : 14,
    'F' : 15,
    'a' : 10,
    'b' : 11,
    'c' : 12,
    'd' : 13,
    'e' : 14,
    'f' : 15,
  }

function hexConvbtn() {
  const hex = document.querySelector('#hexCInp').value
  const hexCOut = document.querySelector('#hexCOut')
  let rgb = 'rgb('
  
  if (hex.length === 6) {
    let val1 = val[hex[0]]*16 + val[hex[1]]
    rgb += val1.toString() + ',';
    val1 = val[hex[2]]*16 + val[hex[3]]
    rgb += val1.toString()+ ',';
    val1 = val[hex[4]]*16 + val[hex[5]]
    rgb += val1.toString()+ ')';
    hexCOut.innerHTML = rgb

  } else {
    alert("Please Enter 6 digit Hex code Without # Sign")
  }
}

function rgbConvbtn() {
    console.log('HI');
    const RCInput = document.querySelector('#RCInput').value
    const GCInput = document.querySelector('#GCInput').value
    const BCInput = document.querySelector('#BCInput').value
    const hexCOut = document.querySelector('#rgbCOut')
    let hex = '#'
    let qor = val[ Math.floor( parseInt(RCInput) / 16)]
    let rem = val[parseInt(RCInput) % 16]
    hex += qor.toString() + rem.toString()
    qor = val[ Math.floor( parseInt(GCInput) / 16)]
    rem = val[parseInt(GCInput) % 16]
    hex += qor.toString() + rem.toString()
    qor = val[ Math.floor( parseInt(BCInput) / 16)]
    rem = val[parseInt(BCInput) % 16]
    hex += qor.toString() + rem.toString()
    hexCOut.innerHTML = hex

}

 