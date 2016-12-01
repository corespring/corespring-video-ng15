import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-video'

export default class CorespringTextEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<corespring-video id="' + this.getAttribute('pie-id') + '"></corespring-video>';
  }
}


