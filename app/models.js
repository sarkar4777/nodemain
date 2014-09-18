var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var mongoosePaginate = require('mongoose-paginate');     

var UserSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    company: String,
    userrole: String,
    site: String,
    phone: String,
    category: String,
    country: String,
    address: String,
    superadmin: String,
    accountmanager: String,
    datetime : { type : Date, default: Date.now }
});

var SessionSchema = new Schema({
	userid: String,
    fullname: String,
    email: String,
    password: String,
    company: String,
    type: String,
    site: String,
    phone: String,
    category: String,
    country: String,
    address: String,
    datetime : { type : Date, default: Date.now }
});

var PayoutSchema = new Schema({
	campaignids: String,
    name: String,
    description: String,
    conversiontype: String,
    status: String,
    variables: String,
    datetime : { type : Date, default: Date.now }
});

var CampaignBannerSchema = new Schema({
    advertiserid: String,
    advertisername: String,
    blacklisted: String,
    name: String,
    campaignid: String,
    pricingmodel: String,
    currency: String,
    startdate: { type : Date, default: Date.now },
    enddate: { type : Date, default: Date.now },
    status: String,
    implimit: { type : Number, default: 0 },
    dailyimplimit: { type : Number, default: 0 },
    monthlyimplimit: { type : Number, default: 0 },
    comment: String,
    cookieexpiry: String,
    visibility: String,
    dlqs: String,
    dlqc: String,
    campurl: String,
    discurl: String,
    description: String,
    platform: String,
    creativetype: String,
    name: String,
    basebanner: String,
    interstitialportrait: String,
    interstitiallandscape: String,
    dialogtype: String,
    title: String,
    message: String,
    buttontext: String,
    destinationurl: String,
    target: String,
    weightage: { type : Number, default: 1 },
    startbanner: { type : Date, default: Date.now },
    endbanner: { type : Date, default: Date.now },
    bannercomments: String,
    campaignfilter: String,
    bannerfilter: String,
    datetime : { type : Date, default: Date.now }
});

UserSchema.plugin(mongoosePaginate);
SessionSchema.plugin(mongoosePaginate);
CampaignBannerSchema.plugin(mongoosePaginate);
PayoutSchema.plugin(mongoosePaginate);

module.exports = {
    User : mongoose.model('users', UserSchema),
    Session : mongoose.model('session', SessionSchema),
    CampaignBanner : mongoose.model('campaignbanner', CampaignBannerSchema),
    Payout : mongoose.model('payout', PayoutSchema)
};
