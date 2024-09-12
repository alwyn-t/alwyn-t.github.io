// handle hashes and edge cases when first loading
async function onPageLoad() {
    // hashes (radio button selections)
    const hash = window.location.hash;
    const home = element('#home');
    const proj = element('#proj');
    const abou = element('#abou');
    const cont = element('#cont');
    const ttc = element('#ttc');
    const num = element('#num');
    const dyn = element('#dyn');
    const cir = element('#cir');
    const fpga = element('#fpga');
    const nios = element('#nios');
    const medi = element('#medi');

    home.checked = false;
    proj.checked = false;
    abou.checked = false;
    cont.checked = false;
    ttc.checked = false;
    num.checked = false;
    dyn.checked = false;
    cir.checked = false;
    fpga.checked = false;
    nios.checked = false;
    medi.checked = false;

    switch (hash) {
        case '#home':
            element('#homeSect').parentNode.appendChild(element('#homeSect'));
            break;
        case '#proj':
            element('#projSect').parentNode.appendChild(element('#projSect'));
            break;
        case '#abou':
            element('#abouSect').parentNode.appendChild(element('#abouSect'));
            break;
        case '#cont':
            element('#contSect').parentNode.appendChild(element('#contSect'));
            break;
        case '#ttc':
            element('#ttcSect').parentNode.appendChild(element('#ttcSect'));
            break;
        case '#num':
            element('#numSect').parentNode.appendChild(element('#numSect'));
            break;
        case '#dyn':
            element('#dynSect').parentNode.appendChild(element('#dynSect'));
            break;
        case '#cir':
            element('#cirSect').parentNode.appendChild(element('#cirSect'));
            break;
        case '#fpga':
            element('#fpgaSect').parentNode.appendChild(element('#fpgaSect'));
            break;
        case '#nios':
            element('#niosSect').parentNode.appendChild(element('#niosSect'));
            break;
        case '#medi':
            element('#mediSect').parentNode.appendChild(element('#mediSect'));
            break;
    
        default:
            element('#homeSect').parentNode.appendChild(element('#homeSect'));
            break;
    }

    switch (hash) {
        case '#home':
        case '#proj':
        case '#abou':
        case '#cont':
        case '#ttc':
        case '#num':
        case '#dyn':
        case '#cir':
        case '#fpga':
        case '#nios':
        case '#medi':
            window.location.hash = hash;
            element(hash).checked = true;
            console.log('set page to ' + hash);
            break;
        
        default:
            console.log('page of ' + hash + ' is not available, redirecting you to the #home page');
            window.location.hash = '#home';
            home.checked = true;
            console.log('set page to #home');
            break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// set up is done by loading.js
