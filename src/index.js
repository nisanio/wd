function moveElement(canvas, elemOver){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let elemRect = elemOver.getBoundingClientRect();
    let x = elemRect.x;
    let y = elemRect.y;
    console.log("X,Y:", x, y);   
    canvas.style.position = "absolute";
    canvas.style.left = x + 'px';
    canvas.style.top = y + 'px';
    
    canvas.style.width  = elemRect.width + 'px';;
    canvas.style.height = elemRect.height + 'px';;

}


function putCanvasOver(document, canvas){
    moveElement(canvas, childElem)
    document.body.appendChild(canvas)
}

function removeCanvasOver(document, canvas){
    if (document.body.contains(canvas)){
        document.body.removeChild(canvas)
    }
    
}

function printMousePos(event) {
   // debugger;
    console.log( "clientX: " + event.clientX +
    " - clientY: " + event.clientY);
    console.log( "PageX: " + event.pageX +
    " - PageY: " + event.pageY);
    console.log( "X: " + event.x +
    " - Y: " + event.y);
  }


  function moveCaret(x, y) {
    let sel = window.getSelection();
    //sel.removeAllRanges();
    sel.addRange(document.caretRangeFromPoint(x, y));
  }

  function insertAtCursorT(domElem, value) {
    
}

function getCaretPosition(element) {

  var caretOffset = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
          var range = win.getSelection().getRangeAt(0);
          var preCaretRange = range.cloneRange();
          preCaretRange.selectNodeContents(element);
          preCaretRange.setEnd(range.endContainer, range.endOffset);
          caretOffset = preCaretRange.toString().length;
      }
  } else if ( (sel = doc.selection) && sel.type != "Control") {
      var textRange = sel.createRange();
      var preCaretTextRange = doc.body.createTextRange();
      preCaretTextRange.moveToElementText(element);
      preCaretTextRange.setEndPoint("EndToEnd", textRange);
      caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
}
  
//     7
//       console.log("1-1");
//       range = sel.getRangeAt(0);
//       if (range.commonAncestorContainer.parentNode == editableDiv) {
//         console.log("1-2");
//         caretPos = range.endOffset;
//       }
//     ⁄⁄⁄}
//   } else if (document.selection && document.selection.createRange) {
//     console.log("2");
//     range = document.selection.createRange();
//     if (range.parentElement() == editableDiv) {
//       console.log("2-1");
//       var tempEl = document.createElement("span");
//       editableDiv.insertBefore(tempEl, editableDiv.firstChild);
//       var tempRange = range.duplicate();
//       tempRange.moveToElementText(tempEl);
//       tempRange.setEndPoint("EndToEnd", range);
//       caretPos = tempRange.text.length;
//     }
//   }
//   return caretPos;
// }



/// remove
function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: (el.right + window.scrollX ) +'px',
      top: (el.top + window.scrollY ) +'px'
    }
  }


  function putDot(document, othis){
    var dot = document.createElement('div');
    dot.innerText = '*';
    dot.style.top = getOffset(othis).top; 
    dot.style.left = getOffset(othis).left;
    document.body.appendChild(dot);
  }

  function moveCaret(x, y) {
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(document.caretRangeFromPoint(x, y));
  }



  function insertAtCursor(myField, myValue) {

    /* selecion model - ie */
    if (document.selection) {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
    }
    
    /* field.selectionstart/end  firefox */ 
    else if (myField.selectionStart || myField.selectionStart == '0' ) {
    
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);
    
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
      myField.focus();
    } 
    
    // cursor not active/present
    else {
      myField.value += myValue;
    }
}
    
