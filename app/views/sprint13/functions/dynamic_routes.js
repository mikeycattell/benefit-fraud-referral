var dynamic_routes = {
  urls: function(req, res) {
    var urls = {};
    var fraud_urls = {};


    // Details
    if (req.path === '/details') {
      if (req.body.name && req.body.address && req.body.age ||
          req.body.nino && req.body.name ||
          req.body.nino && req.body.address ||
          req.body.nino && req.body.age)
      {
        urls.next = '/sprint13/details-more';
      } else {
        urls.next = '/sprint13/exit';
      }
      urls.back = '/sprint13/start-page';
    }

    // Fraud Type
    if (req.path === '/fraud-type') {
      fraud_urls = req.body;

      if ( fraud_urls.employment === "true" ) {
        urls.next = 'employment-details';
      } else if ( fraud_urls.partner === "true" ) {
        urls.next = 'partner-details';
      } else if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.housing === "true" ) {
        urls.next = 'housing-type';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      }
    }

    // Employment Details
    if (req.path === '/employment-details') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.partner === "true" ) {
        urls.next = 'partner-details';
      } else if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Partner Employment
    if (req.path === '/partner-employment') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.disability === "true" ) {
        urls.next = 'disability';
      } else if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.housing === "true" ) {
        urls.next = 'housing';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Disability
    if (req.path === '/disability') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Carers More
    if (req.path === '/carers-more') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Abroad
    if (req.path === '/abroad') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    // Identity
    if (req.path === '/identity') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'review';
      }
    }

    // Income More
    if (req.path === '/income-more') {
      fraud_urls = req.cookies.fraud_urls;

      if ( fraud_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }


    // Housing Type
    if (req.path === '/housing-type') {
      housing_urls = req.body;

      if ( housing_urls.council === "true" ) {
        urls.next = 'council';
      } else if ( housing_urls.private === "true" ) {
        urls.next = 'private';
      } else if ( housing_urls.contrived === "true" ) {
        urls.next = 'contrived';
      } else if ( housing_urls.nonresidence === "true" ) {
        urls.next = 'residence';
      } else if ( housing_urls.nondependance === "true" ) {
        urls.next = 'dependance';
      } else if ( housing_urls.landlord === "true" ) {
        urls.next = 'landlord';
      } else if ( housing_urls.other === "true" ) {
        urls.next = 'other';
      }
    }

    // council
    if (req.path === '/council') {
      housing_urls = req.cookies.housing_urls;

      if ( housing_urls.carers === "true" ) {
        urls.next = 'carers';
      } else if ( housing_urls.abroad === "true" ) {
        urls.next = 'abroad';
      } else if ( housing_urls.identity === "true" ) {
        urls.next = 'identity';
      } else if ( housing_urls.income === "true" ) {
        urls.next = 'income';
      } else if ( housing_urls.other === "true" ) {
        urls.next = 'other';
      } else {
        urls.next = 'additional-information';
      }
    }

    return urls;
  },
};

module.exports = dynamic_routes;
