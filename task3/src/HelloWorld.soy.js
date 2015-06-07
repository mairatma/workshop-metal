/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from HelloWorld.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.HelloWorld.
 * @hassoydeltemplate {HelloWorld}
 * @hassoydeltemplate {HelloWorld.name}
 * @hassoydelcall {HelloWorld}
 * @hassoydelcall {HelloWorld.name}
 */

if (typeof Templates.HelloWorld == 'undefined') { Templates.HelloWorld = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('Hello World!' + soy.$$getDelegateFn(soy.$$getDelTemplateId('HelloWorld.name'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HelloWorld.content.soyTemplateName = 'Templates.HelloWorld.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.name = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('My name is ' + soy.$$escapeHtml(opt_data.name));
};
if (goog.DEBUG) {
  Templates.HelloWorld.name.soyTemplateName = 'Templates.HelloWorld.name';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.__deltemplate_s8_17f8485a = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('HelloWorld'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.HelloWorld.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HelloWorld.__deltemplate_s8_17f8485a.soyTemplateName = 'Templates.HelloWorld.__deltemplate_s8_17f8485a';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HelloWorld'), '', 0, Templates.HelloWorld.__deltemplate_s8_17f8485a);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.__deltemplate_s14_eb2c41a1 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="helloworld component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.HelloWorld.__deltemplate_s14_eb2c41a1.soyTemplateName = 'Templates.HelloWorld.__deltemplate_s14_eb2c41a1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HelloWorld'), 'element', 0, Templates.HelloWorld.__deltemplate_s14_eb2c41a1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.__deltemplate_s22_84ad2e9f = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy23 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'name');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy23) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.HelloWorld.__deltemplate_s22_84ad2e9f.soyTemplateName = 'Templates.HelloWorld.__deltemplate_s22_84ad2e9f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HelloWorld.name'), 'element', 0, Templates.HelloWorld.__deltemplate_s22_84ad2e9f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.HelloWorld.__deltemplate_s29_a153ff6b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('HelloWorld.name'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.HelloWorld.name(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.HelloWorld.__deltemplate_s29_a153ff6b.soyTemplateName = 'Templates.HelloWorld.__deltemplate_s29_a153ff6b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('HelloWorld.name'), '', 0, Templates.HelloWorld.__deltemplate_s29_a153ff6b);

Templates.HelloWorld.name.params = ["name"];
/* jshint ignore:end */
