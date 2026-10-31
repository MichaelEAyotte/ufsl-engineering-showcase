const {aggregateMemberSeasons}=require('../src/season-statistics');
console.log(JSON.stringify(aggregateMemberSeasons(require('./fixture')).summary,null,2));
