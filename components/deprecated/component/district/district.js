/**
 * Created by Administrator on 2015/5/28.
 */
var React = require('react/addons');
var data = require('./district-data');
var $ = require('jquery');

var District = React.createClass({
    getInitialState : function(){
         return {
             hasCity: this.props.hasCity == undefined ? false : this.props.hasCity,
             hasCountry: this.props.hasCountry == undefined ? false : this.props.hasCountry,
             city: null,
             country: null
         }

    },
    render : function(){
        var provinces = data.province;
        var province = [];
        var city = [];
        var country = [];
        var selectCity = '';
        var selectCountry = '';
        var defaultProvince = this.props.province;
        /**----------------省------------------**/
        for(var p in provinces){
            province.push(<option value={provinces[p]} key={p} id={p}>{provinces[p]}</option>);
            if(defaultProvince != undefined){
                defaultProvince == provinces[p] ? defaultProvince = p : '';
            }
        }
        var selectProvince = <select id="province" className='form-control' defaultValue={this.props.province == undefined ? '-1' : this.props.province} onChange={this._selectProvince}>
                                    <option value='-1'>————请选择————</option>
                                    {province}
                            </select>;

        /**----------------市-------------------**/
        if(this.state.city!=null){
            var cities = this.state.city;
            for(var c in cities){
                city.push(<option value={cities[c]} key={c} id={c}>{cities[c]}</option>);
            }
        }else if(defaultProvince != undefined && this.state.hasCity){

            var cities = data[defaultProvince];
            for(var c in cities){
                city.push(<option value={cities[c]} key={c} id={c}>{cities[c]}</option>);
            }
        }
        selectCity = <select className='form-control' id="city" defaultValue={this.props.city == undefined ? '-1' : this.props.city} onChange={this._selectCity}>
            <option value='-1'>————请选择————</option>
                            {city}
        </select>;

        /**----------------区-----------------**/
        if(this.state.country!=null){
            var countries = this.state.country;
            for(var c in countries){
                country.push(<option value={countries[c]} key={c} id={c}>{countries[c]}</option>);
            }

        }else if(this.props.city != undefined && this.state.hasCountry){
            var countries = data[this.props.city];
            for(var c in countries){
                country.push(<option value={countries[c]} key={c} id={c}>{countries[c]}</option>);
            }
        }
        selectCountry = <select className='form-control' id="country" defaultValue={this.props.country == undefined ? '-1' : this.props.country}>
            <option value='-1'>————请选择————</option>
                                {country}
        </select>;



        return  <div className="row">
                    <div className="col-lg-4">{selectProvince}</div>
                    <div className="col-lg-4">{this.state.hasCity?selectCity:''}</div>
                    <div className="col-lg-4">{this.state.hasCountry?selectCountry:''}</div>
                </div>;
    },
    _selectProvince : function(e){
        var value = $("#province").find("option:selected").attr("id");
        if(this.state.hasCity && value!=-1){
            this.setState({city:data[value]});
        }else{
            this.setState({city:null});
        }
    },
    _selectCity : function(e){
        var value = $("#city").find("option:selected").attr("id");
        if(this.state.hasCountry && value!=-1){
            this.setState({country:data[value]});
        }else{
            this.setState({country:null});
        }
    }
});

module.exports = District;
