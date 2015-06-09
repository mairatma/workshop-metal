/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from HomePage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.HomePage.
 * @hassoydeltemplate {HomePage}
 * @hassoydeltemplate {HomePage.panel}
 * @hassoydelcall {HomePage}
 * @hassoydelcall {HomePage.panel}
 * @hassoydelcall {Modal}
 * @hassoydelcall {Panel}
 */

if (typeof Templates.HomePage == 'undefined') { Templates.HomePage = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<h1>Home Page</h1><button type="button" data-onclick="Modal:show">Open Modal</button>' + soy.$$getDelegateFn(soy.$$getDelTemplateId('HomePage.panel'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HomePage.content.soyTemplateName = 'Templates.HomePage.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.panel = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal'), '', true)({id: 'Modal', header: 'Modal header', body: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel'), '', true)({title: opt_data.panelTitle, body: 'Home Page Body'}, null, opt_ijData)), visible: false}, null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.HomePage.panel.soyTemplateName = 'Templates.HomePage.panel';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.__deltemplate_s14_f8ec1978 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('HomePage'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.HomePage.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HomePage.__deltemplate_s14_f8ec1978.soyTemplateName = 'Templates.HomePage.__deltemplate_s14_f8ec1978';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HomePage'), '', 0, Templates.HomePage.__deltemplate_s14_f8ec1978);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.__deltemplate_s20_e2a9dc26 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="homepage component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.HomePage.__deltemplate_s20_e2a9dc26.soyTemplateName = 'Templates.HomePage.__deltemplate_s20_e2a9dc26';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HomePage'), 'element', 0, Templates.HomePage.__deltemplate_s20_e2a9dc26);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.__deltemplate_s28_90499fe2 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy29 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'panel');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy29) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.HomePage.__deltemplate_s28_90499fe2.soyTemplateName = 'Templates.HomePage.__deltemplate_s28_90499fe2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HomePage.panel'), 'element', 0, Templates.HomePage.__deltemplate_s28_90499fe2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HomePage.__deltemplate_s35_a7ae51ac = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('HomePage.panel'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.HomePage.panel(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HomePage.__deltemplate_s35_a7ae51ac.soyTemplateName = 'Templates.HomePage.__deltemplate_s35_a7ae51ac';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HomePage.panel'), '', 0, Templates.HomePage.__deltemplate_s35_a7ae51ac);

Templates.HomePage.panel.params = ["panelTitle"];
export default Templates.HomePage;
/* jshint ignore:end */
