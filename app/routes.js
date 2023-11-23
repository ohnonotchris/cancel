//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/are-you-sure', function(request,response){
    var cancelChoice = request.session.data['cancel-choice']
    if (cancelChoice == "yes"){
        response.redirect("/are-you-sure")
    } else {
        response.redirect("/index")
    }
})