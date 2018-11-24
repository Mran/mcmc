//index.js
//获取应用实例
const util = require('../../utils/util.js')

const app = getApp()
var self
Page({
  data: {
    morseCode: null,
    reMorseCode:null,
    humanText: "",
    morseText: ""
  },
  humanInput: function(event) {
    var humanText = event.detail.value.toUpperCase();
    var morseText = ""
    if (humanText.indexOf("I LOVE YOU") > -1 || humanText.indexOf("ILOVEYOU") > -1) {
     wx.showToast({
       title: 'I ❤️ U',
       icon: 'none',
       image: '',
       duration: 1000,
       mask: true,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
    }
    if (humanText.indexOf("LOVE") > -1 || humanText.indexOf("LOVEYOU") > -1) {
      wx.showToast({
        title: '❤️',
        icon: 'none',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    for (var i = 0; i < humanText.length; i++) {
      if (this.data.morseCode.get(humanText[i]) != undefined)
        morseText = morseText + this.data.morseCode.get(humanText[i]) + "~"
      else morseText = morseText + "🍐";
      morseText = morseText.replace(/·/g, "毛 ").replace(/-/g, "大可爱!")
    }
    self.setData({
      morseText: morseText
    })
  },
  morseInput: function(event) {
    var morseText = event.detail.value.replace(/🍐/g, "");
    var morseTextArr = morseText.split('~')
    console.log(morseTextArr)
    var humanText=""
    for (var i = 0; i < morseTextArr.length;i++)
    {
      morseTextArr[i] = morseTextArr[i].replace(/毛 /g, "·").replace(/大可爱!/g, "-")
      if (this.data.reMorseCode.get(morseTextArr[i]) != undefined)
        humanText += this.data.reMorseCode.get(morseTextArr[i]);
      else humanText += morseTextArr[i]
    }
    console.log(humanText)
    
    console.log(morseTextArr)
    self.setData({
      humanText: humanText
    })
  },
  jumpToHelp:function()
  {
    wx.navigateTo({
      url: '/pages/help/help',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function() {
    self = this;
    var morseCode = new Map([
      ['A', "·-"],
      ['B', "-···"],
      ['C', "-·-·"],
      ['D', "-··"],
      ['E', "·"],
      ['F', "··-·"],
      ['G', "--·"],
      ['H', "····"],
      ['I', "··"],
      ['J', "·---"],
      ['K', "-·-"],
      ['L', "·-··"],
      ['M', "--"],
      ['N', "-·"],
      ['O', "---"],
      ['P', "·--·"],
      ['Q', "--·-"],
      ['R', "·-·"],
      ['S', "···"],
      ['T', "-"],
      ['U', "··-"],
      ['V', "···-"],
      ['W', "·--"],
      ['X', "-··-"],
      ['Y', "-·--"],
      ['Z', "--··"],
      ['1', "·----"],
      ['2', "··---"],
      ['3', "··---"],
      ['4', "····-"],
      ['5', "·····"],
      ['6', "-····"],
      ['7', "--···"],
      ['8', "---··"],
      ['9', "----·"],
      ['0', "-----"],
      ['.', "·-·-·-"],
      [':', "-·-·-·"],
      [',', "--··--"],
      [';', "-·-·-·"],
      ['?', "··--··"],
      ['=', "-···-"],
      ['\'', "·----·"],
      ['/', "-··-·"],
      ['!', "-·-·--"],
      ['-', "-····-"],
      ['_', "··--·-"],
      ['"', "·-··-·"],
      ['(', "-·--·"],
      [')', "-·--·-"],
      ['$', "···-··-"],
      ['&', "·-···"],
      ['@', "·--·-·"],
      ['+', "·-·-·"],

    ])
    var reMorseCode = new Map([
      ['·-', "A"],
      ["-···", 'B'],
      ["-·-·", 'C'],
      ["-··", 'D'],
      ["·", 'E'],
      ["··-·", 'F'],
      ["--·", 'G'],
      ["····", 'H'],
      ["··", 'I'],
      ["·---", 'J'],
      ["-·-", 'K'],
      ["·-··", 'L'],
      ["--", 'M'],
      ["-·", 'N'],
      ["---", 'O'],
      ["·--·", 'P'],
      ["--·-", 'Q'],
      ["·-·", 'R'],
      ["···", 'S'],
      ["-", 'T'],
      ["··-", 'U'],
      ["···-", 'V'],
      ["·--", 'W'],
      ["-··-", 'X'],
      ["-·--", 'Y'],
      ["--··", 'Z'],
      ["·----", '1'],
      ["··---", '2'],
      ["··---", '3'],
      ["····-", '4'],
      ["·····", '5'],
      ["-····", '6'],
      ["--···", '7'],
      ["---··", '8'],
      ["----·", '9'],
      ["-----", '0'],
      ["·-·-·-", '.'],
      ["-·-·-·", ':'],
      ["--··--", ','],
      ["-·-·-·", ';'],
      ["··--··", '?'],
      ["-···-", '='],
      ["·----·", '\\'],
      ["-··-·", '/'],
      ["-·-·--", '!'],
      ["-····-", '-'],
      ["··--·-", '_'],
      ["·-··-·", '"'],
      ["-·--·", '('],
      ["-·--·-", ')'],
      ["···-··-", '$'],
      ["·-···", '&'],
      ["·--·-·", '@'],
      ["·-·-·", '+'],

    ])
    self.setData({
      morseCode: morseCode
      , reMorseCode: reMorseCode
    })
  }
})