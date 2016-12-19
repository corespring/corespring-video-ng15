
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;
import PiePlayer from 'pie-player';
customElements.define('pie-player', PiePlayer);
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
import CorespringVideoNg15 from 'corespring-video-ng15';
customElements.define('corespring-video-ng15', CorespringVideoNg15);
import CorespringChoice from 'corespring-choice';
customElements.define('corespring-choice', CorespringChoice);
    