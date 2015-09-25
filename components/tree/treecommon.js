/*
 * This is a Treeview component.
 * @module Treeview
 */



/*
 * 这是TreeCommonMixin的说明
 * @class TreeCommonMixin
 */
var TreeCommonMixin = {
    

    /*
     * Invoked once before the component is mounted.
     * The return value will be used as the initial value of this.state.
     * @private
     * @method getInitialState
     * @return {Object} 返回初始化属性
     */
    getInitialState: function() {
        var state = {};
        var propsData = this.props.data || {};
        var attributes = this.getAttributes();
        // loop through attributes defined for component
        for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            var name = attribute.name;
            var attributeValue = this.props[name] || propsData[name];
            state[name] = attributeValue || attribute.defaultValue;
        }
        state.containerClassNames = [this.name + '-container'];
        state.boxClass && state.containerClassNames.push(state.boxClass);
        // run additional setup if present
        //this.setupInitial && this.setupInitial();
        return state;
    },
    /*
     * 组件将要加载时执行
     * @private
     * @method componentWillMount
     */
    componentWillMount: function() {
        this.listenerCol = {};
    },
    /*
     * 组件将要卸载前执行
     * @private
     * @method componentWillUnmount
     */
    componentWillUnmount: function() {
        this.listenerCol = null;
    },
    
    /*
     * generate uid
     * @private
     * @method generateUid
     */
    generateUid: function() {
        var delim = '';
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
    },
    
    /*
     * populate id field if not present
     * @private
     * @method normalizeItems
     */
    normalizeItems: function(items) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (!item.id) {
                item.id = this.generateUid();
            }
        }
    },
    
    /*
     * 创建事件回掉
     * @private
     * @method on
     */
    on: function(eventName, callback) {
        if (!this.listenerCol[eventName]) {
            this.listenerCol[eventName] = [];
        }
        this.listenerCol[eventName].push(callback);
    },

    /*
     * 执行事件
     * @private
     * @method fire
     */
    fire: function(eventName, values) {
        if (!this.listenerCol[eventName]) {
            return;
        }
        var callbacks = this.listenerCol[eventName];
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(null, values);
        }
    },

    /*
     * Get key col name from ColModel
     * @private
     * @example sortCondition: { name:'id', direction:'asc|des|up|down' }
     * @method getKeyColNameFromColModel
     */
    getKeyColNameFromColModel: function(colModel) {
        var keyColName = '';
        if (!colModel) {
            return keyColName;
        }
        for (var name in colModel) {
            var colModelItem = colModel[name];
            if (colModelItem.key) {
                keyColName = colModelItem.name;
            }
        }
        return keyColName;
    },
    

    /*
     * @private
     * sort dataArray using sortCondition
     * @example sortCondition: { name:'id', direction:'asc|des|up|down' }
     * @method sortData
     */
    sortData: function(dataArray, sortCondition) {
        var resultArray = [];
        var propertyName = sortCondition.name;
        var sortDirection = sortCondition.direction;
        // sort data using compare function
        dataArray.sort(function(a, b) {
            var result = 0;
            if (!sortDirection) {
                return result;
            }
            if (a[propertyName] > b[propertyName]) {
                result = 1;
            } else if (a[propertyName] < b[propertyName]) {
                result = -1;
            }
            if (sortDirection == 'des' || sortDirection == 'down') {
                result  = -1 * result;
            }
            return result;
        });
        // return sorted result
        return dataArray;
    }
};


module.exports=TreeCommonMixin;