function filter(inputSelector, dataSelector) {
    let input = document.getElementById(inputSelector);
    let filter = input.value.toUpperCase();
    let ul = document.getElementById(dataSelector);
    let items = ul.getElementsByTagName('li');
  
    // Treffer merken
    let matches = [];
  
    // Suchlauf: Treffer ermitteln, DOM-Elemente zeigen/verstecken
    for (let i = 0; i < items.length; i++) {
      currentItem = items[i];
  
      txtValue = currentItem.textContent || currentItem.innerText || '';
  
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        currentItem.style.display = '';
        matches.push(currentItem);
      } else {
        currentItem.style.display = 'none';
      }
    }
  
    // Trefferlauf: Alle getroffenen Elemente ablaufen und deren Kinder prüfen
    for (let i = 0; i < matches.length; i++) {
      let childListItemsOfMatch = matches[i].getElementsByTagName('li');
  
      // Ermitteln, ob der Treffer ggf. bei einem Kind lag
      let allChildrenInvisible = true;
      for (let k = 0; k < childListItemsOfMatch.length; k++) {
        if (childListItemsOfMatch[k].style.display == '') {
          allChildrenInvisible = false;
          break;
        }
      }
  
      // Treffer lag beim Parent, also alle Kinder anzeigen
      if (allChildrenInvisible) {
        for (let k = 0; k < childListItemsOfMatch.length; k++) {
          childListItemsOfMatch[k].style.display = '';
        }
      }
    }
  }