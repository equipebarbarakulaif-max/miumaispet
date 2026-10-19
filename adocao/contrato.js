/**
 * Projeto Miu Mais Pet — texto do termo de adoção.
 * Este arquivo é usado em dois lugares: no Google (para gerar o PDF)
 * e no site (site/adocao/contrato.js, para mostrar o termo antes do aceite).
 * Se mudar o contrato aqui, copie este arquivo também para site/adocao/contrato.js.
 */

const NOME_PROJETO = 'Projeto Miu Mais Pet';
const FORO = 'São Vicente/SP';

// Símbolo da marca (PNG 120px) usado no topo do contrato
const LOGO_PNG = 'data:image/png;base64,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';

const CIDADES_BAIXADA = [
  'santos', 'sao vicente', 'guaruja', 'cubatao', 'praia grande',
  'bertioga', 'mongagua', 'itanhaem', 'peruibe'
];

// ---------------------------------------------------------------------------
// Contrato (funções puras: também usadas na pré-visualização local)
// ---------------------------------------------------------------------------

function montarContrato(d, cfg, extra) {
  const e = esc_;
  const baixada = ehBaixada_(d.cidade);
  const vacina = vacinaDoAnimal_(d, cfg);
  const prazo = cfg['Prazo para castração'];

  let castracao;
  if (d.castrado === 'Sim') {
    castracao = '<li>O animal já foi entregue castrado.</li>';
  } else {
    castracao =
      '<li>Castrar o animal ' + e(prazo) + ':' +
      '<ul>' +
      '<li' + (baixada ? ' class="aplica"' : '') + '><b>Adotante residente na Baixada Santista:</b> a castração é gratuita, ' +
      'feita por clínica parceira do PROJETO, que indicará o local e ajudará a agendar.</li>' +
      '<li' + (!baixada ? ' class="aplica"' : '') + '><b>Adotante residente fora da Baixada Santista:</b> a castração fica por conta do(a) ADOTANTE.</li>' +
      '<li>Nos dois casos, o(a) ADOTANTE deve enviar ao PROJETO, depois da cirurgia, o <b>comprovante de castração junto com a foto ' +
      'da carteira de vacinação atualizada</b>.</li>' +
      '</ul>' +
      '<p class="nota">Como o(a) ADOTANTE reside em ' + e(d.cidade) + '/' + e(d.uf) + ', aplica-se a regra ' +
      (baixada ? 'da <b>Baixada Santista (castração gratuita)</b>' : 'de <b>fora da Baixada Santista (castração por conta do adotante)</b>') + '.</p>' +
      '</li>';
  }

  const regraPasseio = d.especie === 'Gato'
    ? 'instalar telas de proteção em janelas, sacadas e áreas abertas da residência'
    : 'só passear com o animal usando coleira e guia';

  return '<!doctype html><html><head><meta charset="utf-8"><style>' +
    'body{font-family:Nunito,Arial,Helvetica,sans-serif;font-size:11pt;line-height:1.45;color:#13254A;margin:0}' +
    '.topo-termo{text-align:center;margin:0 0 6px}.topo-termo img{width:44px;height:44px}' +
    'h1{font-family:"Baloo 2",Arial,sans-serif;font-size:15pt;text-align:center;margin:0 0 2px;color:#13254A}' +
    '.sub{text-align:center;color:#1E4FA0;font-weight:bold;margin:0 0 14px}' +
    'h2{font-size:11.5pt;margin:16px 0 6px;color:#1E4FA0;border-bottom:1px solid #D5DEEE;padding-bottom:2px}' +
    'p{margin:4px 0}ol,ul{margin:4px 0;padding-left:22px}li{margin:3px 0}' +
    '.aplica{background:#FFF4CC}.nota{font-size:10pt;color:#555;margin-top:4px}' +
    '.box{border:2px solid #FFC531;border-radius:6px;padding:10px 12px;margin-top:18px;background:#FFF4CC}' +
    '</style></head><body>' +

    '<div class="topo-termo"><img src="' + LOGO_PNG + '" alt="" width="44" height="44"></div>' +
    '<h1>TERMO DE ADOÇÃO E GUARDA RESPONSÁVEL</h1>' +
    '<p class="sub">' + NOME_PROJETO + '</p>' +

    '<h2>1. As partes</h2>' +
    '<p><b>DOADOR:</b> ' + NOME_PROJETO + ', projeto independente de proteção animal de São Vicente/SP, doravante chamado <b>PROJETO</b>.</p>' +
    '<p><b>ADOTANTE:</b> ' + e(d.nome) + ', CPF nº ' + e(d.cpf) + ', RG nº ' + e(d.rg) + ', nascido(a) em ' + e(dataBr_(d.nascimento)) +
    ', residente em ' + e(enderecoCompleto_(d)) + ', CEP ' + e(d.cep) + ', telefone/WhatsApp ' + e(d.telefone) + ', e-mail ' + e(d.email) + '.</p>' +
    '<p>O(a) ADOTANTE declara ser maior de 18 anos e que os dados acima são verdadeiros. Para comprová-los, envia junto com este termo ' +
    'foto de documento oficial com foto (RG, CNH ou outro documento com CPF) e comprovante de residência recente (dos últimos 3 meses) ' +
    'no endereço informado.</p>' +
    '<p>Prestar informação falsa pode configurar crime de falsidade ideológica (art. 299 do Código Penal) e torna este termo sem efeito, ' +
    'obrigando a devolução imediata do animal.</p>' +

    '<h2>2. O animal</h2>' +
    '<p><b>Nome:</b> ' + (d.semNome ? 'ainda sem nome (será escolhido pelo(a) ADOTANTE)' : e(d.animalNome)) + ' · <b>Espécie:</b> ' + e(d.especie) + ' · <b>Sexo:</b> ' + e(d.sexo) +
    ' · <b>Idade aproximada:</b> ' + e(d.idade) + '</p>' +
    '<p><b>Raça:</b> ' + e(d.raca || 'SRD') + ' · <b>Cor/pelagem:</b> ' + e(d.cor || '—') +
    ' · <b>Castrado(a):</b> ' + e(d.castrado) + '</p>' +
    (d.observacoes ? '<p><b>Observações:</b> ' + e(d.observacoes) + '</p>' : '') +
    '<p><b>Local da adoção:</b> ' + e(d.petshop) + '.</p>' +
    '<p><b>Vacinação:</b> a vacinação do animal é <b>obrigação do(a) ADOTANTE</b>, a partir da data da adoção. O(a) ADOTANTE se compromete ' +
    'a aplicar a vacina ' + e(vacina) + ', a antirrábica e todas as doses e reforços anuais indicados pelo veterinário, mantendo a carteira ' +
    'de vacinação em dia e apresentando-a ao PROJETO sempre que solicitado.</p>' +

    '<h2>3. Compromissos do(a) adotante</h2>' +
    '<p>Ao adotar, o(a) ADOTANTE assume total responsabilidade pelo animal e se compromete a:</p><ol>' +
    '<li>Garantir o bem-estar físico e emocional do animal, oferecendo abrigo, alimentação adequada, água limpa, higiene, atenção e carinho.</li>' +
    '<li>Vacinar o animal e manter as vacinas e a vermifugação em dia, conforme o item 2, e levá-lo ao veterinário sempre que necessário, inclusive em caso de doença ou acidente.</li>' +
    '<li>Manter o animal em ambiente limpo, arejado e protegido do sol, da chuva e do frio.</li>' +
    '<li>Não manter o animal preso em correntes ou confinado em espaços pequenos.</li>' +
    '<li>Não permitir que o animal tenha acesso livre à rua e ' + regraPasseio + '.</li>' +
    '<li>Manter o animal identificado com plaquinha com o telefone do(a) ADOTANTE.</li>' +
    castracao +
    '<li>Nunca abandonar o animal, nem vendê-lo, doá-lo ou repassá-lo a terceiros.</li>' +
    '<li>Em caso de desistência, por qualquer motivo, devolver o animal <b>diretamente ao PROJETO</b>, avisando com antecedência.</li>' +
    '<li>Avisar o PROJETO em até 48 horas em caso de fuga, desaparecimento ou morte do animal, e também em caso de mudança de endereço ou telefone.</li>' +
    '<li>Enviar fotos ou vídeos do animal quando solicitado e aceitar visitas do PROJETO, agendadas com antecedência, durante os primeiros ' +
    '6 (seis) meses após a adoção.</li>' +
    '</ol>' +

    '<h2>4. O(a) adotante declara estar ciente de que</h2><ul>' +
    '<li>Um cão ou gato pode viver 15 anos ou mais, e durante toda essa vida, inclusive na velhice, será responsável por ele.</li>' +
    '<li>O descumprimento deste termo dá ao PROJETO o direito de pedir a devolução do animal, e o(a) ADOTANTE se compromete a devolvê-lo.</li>' +
    '<li>Maus-tratos, abandono e omissão de cuidados são crime previsto no art. 32 da Lei Federal nº 9.605/1998. Para cães e gatos, a pena é ' +
    'de reclusão de 2 a 5 anos, multa e proibição da guarda (Lei nº 14.064/2020).</li>' +
    '</ul>' +

    '<h2>5. Proteção de dados (LGPD)</h2>' +
    '<p>O(a) ADOTANTE autoriza o PROJETO a guardar e usar os dados pessoais deste termo, inclusive as cópias de documento e de comprovante ' +
    'de residência, <b>apenas</b> para acompanhar a adoção e o bem-estar do animal, conforme a Lei nº 13.709/2018 (LGPD). Os dados não serão ' +
    'vendidos nem repassados a terceiros, exceto quando a lei exigir. O(a) ADOTANTE pode pedir a qualquer momento acesso, correção ou exclusão ' +
    'dos dados, salvo os que precisarem ser mantidos para comprovar a adoção.</p>' +

    '<h2>6. Direito de uso de imagem</h2>' +
    (d.autorizaImagem === 'Sim'
      ? '<p class="aplica">O(a) ADOTANTE <b>autoriza</b>, de forma gratuita, o uso de sua imagem e da imagem do animal, em fotos e vídeos feitos no ' +
        'momento da adoção ou enviados por ele(a) depois, no site e nas redes sociais do PROJETO, para divulgar as adoções e o trabalho de ' +
        'proteção animal, conforme o art. 20 do Código Civil. O PROJETO não usará essas imagens para fins comerciais. O(a) ADOTANTE pode ' +
        'cancelar esta autorização a qualquer momento, por mensagem ao PROJETO, que deixará de fazer novas publicações com a sua imagem.</p>'
      : '<p class="aplica">O(a) ADOTANTE <b>não autorizou</b> o uso de sua imagem. O PROJETO poderá divulgar apenas fotos e vídeos do animal, ' +
        'sem mostrar o(a) ADOTANTE. Esta escolha não interfere na adoção.</p>') +

    '<h2>7. Assinatura eletrônica</h2>' +
    '<p>As partes concordam que este termo pode ser aceito eletronicamente. O(a) ADOTANTE marca a opção "Li e aceito" no formulário, e o ' +
    'PROJETO registra a data, a hora e o e-mail do aceite. Esse aceite vale como assinatura, conforme o art. 10, §2º, da MP nº 2.200-2/2001 ' +
    'e a Lei nº 14.063/2020. Uma cópia deste termo é enviada ao e-mail do(a) ADOTANTE.</p>' +

    '<h2>8. Foro</h2>' +
    '<p>Fica eleito o foro da comarca de ' + FORO + ' para resolver qualquer questão referente a este termo.</p>' +

    '<div class="box">' +
    '<p><b>Aceite eletrônico do(a) ADOTANTE:</b> ' + e(d.nome) + ', CPF ' + e(d.cpf) + ', em ' + e(extra.dataHora) +
    ', pelo e-mail ' + e(d.email) + ', em ' + e(d.petshop) + '.</p>' +
    '<p><b>Pelo ' + NOME_PROJETO.toUpperCase() + '.</b></p>' +
    '</div>' +
    '</body></html>';
}

function nomeAnimal_(d) {
  return d.semNome ? 'animal ainda sem nome' : d.animalNome;
}

function vacinaDoAnimal_(d, cfg) {
  return d.especie === 'Gato' ? cfg['Vacina para gatos'] : cfg['Vacina para cães'];
}

function ehBaixada_(cidade) {
  const c = String(cidade || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  return CIDADES_BAIXADA.indexOf(c) !== -1;
}

function enderecoCompleto_(d) {
  return d.rua + ', nº ' + d.numero + (d.complemento ? ' (' + d.complemento + ')' : '') +
    ', ' + d.bairro + ', ' + d.cidade + '/' + d.uf;
}

function dataBr_(iso) {
  const p = String(iso || '').split('-');
  return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : String(iso || '');
}

function primeiroNome_(nome) {
  return String(nome).trim().split(/\s+/)[0];
}

function cpfValido(cpf) {
  const n = String(cpf || '').replace(/\D/g, '');
  if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) return false;
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) soma += Number(n[i]) * (t + 1 - i);
    const dig = ((soma * 10) % 11) % 10;
    if (dig !== Number(n[t])) return false;
  }
  return true;
}

function esc_(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
