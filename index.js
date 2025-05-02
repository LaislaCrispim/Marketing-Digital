function doPost(e) {
    var sheet = SpreadsheetApp.openById('AKfycby2iKq3TOy78_6bGwOaG2vSC9BuF8Ff2yCd5PimyfuFudIQTwajLTRoIjwOhxLuZS0cVQ');  // Substitua pelo ID da sua planilha
    var dados = JSON.parse(e.postData.contents);
  
    // Adiciona os dados na primeira linha disponível
    sheet.appendRow([dados.nome, dados.email]);
  
    return ContentService.createTextOutput("Dados enviados com sucesso");
  }