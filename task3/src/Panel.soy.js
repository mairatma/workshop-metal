/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Panel.
 * @hassoydeltemplate {Panel}
 * @hassoydeltemplate {Panel.body}
 * @hassoydeltemplate {Panel.title}
 * @hassoydelcall {Panel}
 * @hassoydelcall {Panel.body}
 * @hassoydelcall {Panel.title}
 */

if (typeof Templates.Panel == 'undefined') { Templates.Panel = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="panel-heading">' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel.title'), '', true)(opt_data, null, opt_ijData) + '</div><div class="panel-body">' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel.body'), '', true)(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.Panel.content.soyTemplateName = 'Templates.Panel.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.title = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.title));
};
if (goog.DEBUG) {
  Templates.Panel.title.soyTemplateName = 'Templates.Panel.title';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.body = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.body));
};
if (goog.DEBUG) {
  Templates.Panel.body.soyTemplateName = 'Templates.Panel.body';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s12_b861d06c = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Panel.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s12_b861d06c.soyTemplateName = 'Templates.Panel.__deltemplate_s12_b861d06c';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel'), '', 0, Templates.Panel.__deltemplate_s12_b861d06c);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s18_062408b1 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="panel component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s18_062408b1.soyTemplateName = 'Templates.Panel.__deltemplate_s18_062408b1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel'), 'element', 0, Templates.Panel.__deltemplate_s18_062408b1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s26_2d1322d1 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy27 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'title');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy27) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s26_2d1322d1.soyTemplateName = 'Templates.Panel.__deltemplate_s26_2d1322d1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel.title'), 'element', 0, Templates.Panel.__deltemplate_s26_2d1322d1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s33_a9fcd55b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel.title'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Panel.title(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s33_a9fcd55b.soyTemplateName = 'Templates.Panel.__deltemplate_s33_a9fcd55b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel.title'), '', 0, Templates.Panel.__deltemplate_s33_a9fcd55b);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s38_3ccc5482 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy39 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'body');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy39) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s38_3ccc5482.soyTemplateName = 'Templates.Panel.__deltemplate_s38_3ccc5482';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel.body'), 'element', 0, Templates.Panel.__deltemplate_s38_3ccc5482);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Panel.__deltemplate_s45_bb7be5f8 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Panel.body'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Panel.body(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Panel.__deltemplate_s45_bb7be5f8.soyTemplateName = 'Templates.Panel.__deltemplate_s45_bb7be5f8';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Panel.body'), '', 0, Templates.Panel.__deltemplate_s45_bb7be5f8);

Templates.Panel.title.params = ["title"];
Templates.Panel.body.params = ["body"];
export default Templates.Panel;
/* jshint ignore:end */
