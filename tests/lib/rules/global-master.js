/**
 * @fileoverview Disallow global use of master key
 * @author Ori Livni
 * @copyright HappySale
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/global-master", {

    valid: [
        {
            code: `
                    new Parse.Query("_Installation")
                        .find({
                            useMasterKey: true
                        });
                `
        }, {
            code: `
                    new Parse.Query("_User")
                        .get("123456789")
                        .then(function(user) {
                            return user.save({
                                "name": "another name"
                            }, {
                                useMasterKey: true
                            });
                        });
                `
        }
    ],

    invalid: [
        {
            code: "Parse.Cloud.useMasterKey()",
            errors: [{
                message: "The use of `Parse.Cloud.useMasterKey()` is discourage",
                type: "CallExpression"
            }]
        }
    ]
});