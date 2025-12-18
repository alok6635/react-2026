## figma desgin-
https://www.figma.com/design/hAYuRjJZ6qFvtSTqWPamtT/TMS--H-S-V1?node-id=626-24634&m=dev

<!-- base url -->
<!-- 'https://staging.tms.api.bjshomedelivery.com/v1/tms_app/health_and_safety/?page=1&per_page=10' -->


<!-- ADUIT LOG GET -->

slug url : /audit_log/h_and_s/

module id : 12

curl -X 'GET' \
 'https://development.tms.api.bjshomedelivery.com/v1/audit_logs/reports_AuditLogs/?url=%2Faudit_log%2Fh_and_s%2F&module_id=12&page=1&per_page=10' \
 -H 'accept: application/json'

Request URL

https://development.tms.api.bjshomedelivery.com/v1/audit_logs/reports_AuditLogs/?url=%2Faudit_log%2Fh_and_s%2F&module_id=12&page=1&per_page=10

<!-- ADUIT LOG for post audit log API -->

just add module id and module obj id

https://development.tms.api.bjshomedelivery.com/v1/audit_logs/modules/descriptions/



<!-- post API for creating health and safety : -->

curl -X 'POST' \
 'http://0.0.0.0:8000/v1/tms_app/health_and_safety/' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{
"unit_id": 0,
"trailer_id": 0,
"driver_id": 0,
"incident_time": "2025-09-23T10:56:33.685Z",
"logged_by": "string",
"address": "string",
"postcode": "string",
"longitude": 0,
"latitude": 0,
"incident_type": "string",
"details": "string",
"other_involved_persons": "string",
"is_involved": true,
"status": "Outstanding",
"completion_date": "2025-09-23",
"completion_note": "string",
"file_data": [
{
"file_type": "string",
"file_reference": "string",
"file_name": "string",
"file_path": "string"
}
]
}'

<!-- Update API for creating health and safety : -->

curl -X 'PATCH' \
 'http://0.0.0.0:8000/v1/tms_app/health_and_safety/1' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '


<!-- get list API : -->

curl -X 'GET' \
 'http://0.0.0.0:8000/v1/tms_app/health_and_safety/?page=1&per_page=10' \
 -H 'accept: application/json'
 
Request URL

http://0.0.0.0:8000/v1/tms_app/health_and_safety/?page=1&per_page=10

Server response

Code

Details

200

Response body

Download

{
"message": "Health and safety logs retrieved successfully",
"error": null,
"error_traceback": null,
"data": [
{
"id": 1,
"unit_id": 55,
"trailer_id": null,
"registration_number": "BU74YNG",
"driver_id": 4,
"driver_name": "Deepal Gupta",
"incident_time": "2025-09-23T11:03:42",
"logged_by": "Deepal Gupta",
"address": "Google Building 900, 900 Alta Ave, Mountain View, CA 94043, USA",
"postcode": "",
"longitude": -122.09,
"latitude": 37.42,
"incident_type": "warehouse",
"details": "tyr",
"other_involved_persons": "tesst",
"is_involved": true,
"status": "in_progress",
"completion_date": null,
"completion_note": null,
"created_at": "2025-09-17T09:20:59",
"updated_at": "2025-09-23T11:05:51",
"resources": [
{
"url": "https://tms-dev-env-bucket.s3.amazonaws.com/tms-dev-backend/h_and_s_doc/image/jpeg/gallery_img_1758100839546.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATCKANMIXR2BL7PXG%2F20250923%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250923T110923Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6ce62055d2dd20c13797f6b7a276b1ca51ad0281e089112706a00f164a930527",
"file_type": "Image",
"file_name": "gallery_img_1758100839546.jpg"
},
{
"url": "https://tms-dev-env-bucket.s3.amazonaws.com/tms-dev-backend/h_and_s_doc/video/mp4/gallery_vid_1758100846306.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATCKANMIXR2BL7PXG%2F20250923%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250923T110923Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cf501ed3118ede44d3bb9603bdb2404757bf930598aafed6827f0a0a06cbab39",
"file_type": "Video",
"file_name": "gallery_vid_1758100846306.mp4"
}
]
},

X filters -
[ {"field": "driver_id", "op": "=", "value": "4"} ]
[{"field": "created_at", "op": ">=", "value": "2025-09-18 12:06:06"}]

[{"field": "incident_type", "op": "=", "value": "slip_fall_trip"}]
[{"field": "status", "op": "=", "value": "in_progress"}]
for vehicle id filter
[ {"field": "vehicle_id", "op": "=", "value": "282"} ] → work for both unit and trailor id

<!-- GET API for driver data - -->

curl -X 'GET' \
 'http://0.0.0.0:8000/v1/vehicle_maintenance/vehicle_defect/driver_list/' \
 -H 'accept: application/json'

<!-- Get API for vehicle reg no dropdown - fetch id as well as reg no -->

curl -X 'GET' \
 'http://0.0.0.0:8000/v1/tms_app/vehicles_reg_dropdown/' \
 -H 'accept: application/json'

<!-- Get API to fetch single health and safety log by report/log id -->

curl -X 'GET' \
 'https://development.tms.api.bjshomedelivery.com/v1/tms_app/health_and_safety/1' \
 -H 'accept: application/json'

3/10/2025
<!-- added search term in health and safety in listing api -->

curl -X 'GET' \
 'http://0.0.0.0:8000/v1/tms_app/health_and_safety/?search=Deepal&page=1&per_page=10' \
 -H 'accept: application/json'

search will be performed on the basis of Driver name , address , date time , status , incident type , loged by , other involved persons , vehicle reg no
