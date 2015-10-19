
module.exports = {

    //home
   GET_TABLE_NAME : "/api/report/getMetadataByTableName",

    //role
   SIDE_BAR_MENU : "/api/user/queryUserModule",
   LOGIN : "/api/admin/ajax/userLogin",
   LOGOUT: "/api/admin/ajax/userLogout",
   QUERY_CONSOLE_ROLE : "/api/role/getAllConsoleRole",
   SAVE_LIMITS : '/api/role/updateRoleModules',
   EDIT_CONSOLE_ROLE : '/api/role/editConsoleRole',
   DEL_CONSOLE_ROLE : '/api/role/delConsoleRole',
   CREATE_CONSOLE_ROLE : '/api/role/addConsoleRole',

   //user
   ADD_USER : "/api/user/addUser",
   QUERY_USER : "/api/user/queryUser",
   DELETE_USER : "/api/user/deleteUser",
   UPDATE_USER : "/api/user/updateUser",
   GET_ALL_DEPARTMENT : "/api/user/queryAllDepartment",
   // app
   QUERY_REPORT_RESOURCE_TABLES: "/api/console/getReportResourceTables",
   APP_REQ_REPORT_LIST: "/api/report/queryReportModelListByPage", // no params
   APP_REQ_REPORT: "/api/report/queryReportModelList/", // GET @param id
   APP_REQ_REPORT_DATA: "/api/report/queryReportResult",
   CREATE_REPORT_MODEL: "/api/report/createReportModel",
   QUERY_ROLE_LIMITS : "/api/role/getLimits",
   GET_TABLE_NAME: "/api/report/getMetadataByTableName/",
   DELETE_TEMPLATE:"/api/report/deleteReportModelById/", //Get @param id
   ADD_TABLE_NAME:"/api/report/addResourceTableName/",
   ADD_REPORT_MENU:"/api/report/createReportMenu/", //GET  @param id menuName

   //cdn resource用量录入
   USER_SEARCH: "/api/resource/queryUserByLoginEmailOrLoginName",
   USER_RESOURCE_SEARCH: "/api/resource/queryUserResource",
   SAVE_RESOURCE_USAGE: "/api/resource/saveResourceUsage",   
   QUERY_UPLOADED_FILES: "/api/resource/queryFile",
   DELETE_FILE: "/api/resource/deleteFile"
};
