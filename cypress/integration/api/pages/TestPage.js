/// <reference types = "cypress"/>

export const doCreateCat = (auth_key, app_id) => {
  //return cy.fixture('api_addJobRequest.json').then((myFixture) => {
  return cy.request({
    method: 'POST',
    //  url: 'https://crowdbotics-slack-dev.herokuapp.com/api/v1/apps/'+131658+'/prd_ai_features/',
    url: 'https://crowdbotics-slack-dev.herokuapp.com/api/v1/apps/' + app_id + '/prd_ai_categories/',
    headers: {

      'Authorization': 'Token ' + auth_key,
      'Content-Type': 'application/json',

    },
    body: { id: 8239, title: "Himanshu", description: "", ai_features: [] },
    // body: {"title":"Video upload for recipes","description":"The 'Video upload for recipes' feature allows users to upload video content for their recipes. This feature enhances the recipe sharing experience by providing a visual guide to the cooking process. Users can upload videos directly from their device's gallery or record a video in real time within the app.","acceptance_criteria":["The feature should allow users to upload videos from their device's gallery or record in real time.","The uploaded video should be associated with the correct recipe post.","The video player should have basic controls such as play, pause, and volume control.","The maximum length of the video should be predefined, for example, 5 minutes.","Users should be able to add a caption or description to the video.","The video should be viewable in both the creator's profile and in the main feed.","The feature should support various video formats like .mp4, .mov, .avi, etc.","The feature should display an error message if the upload fails or if the video format is not supported.","The video upload process should include a progress indicator.","The feature should comply with the app's content guidelines and privacy policy."],"prd_ai_category":8201,"prd_ai_user_types":[],"in_backlog":true},
    failOnStatusCode: false,

  }).then((response) => {
    return response;
  })
  //})
};

