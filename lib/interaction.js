module.exports = function Interaction(properties) {
    var self = this;

    self.name = properties.name;
    self.message = properties.message || ' ';
};
