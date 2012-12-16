var IgeSteeringBehaviourSeek = IgeSteeringBehaviour.extend({
	classId: 'IgeSteeringBehaviourSeek',

	init: function(entity, targetKinematics, weight) {
		this._super(entity, targetKinematics, weight);
	},

	getSteering: function() {
		// Update entity kinematic data
		this._updateEntityKinematic();

		// Grab first target, until this is updated to support multiple targets
		var targetKinematic = this._targetKinematics[0];

		var steering = new IgeSteeringOutput();

		// Get direction to target
		steering.velocity = targetKinematic.position.subtract(this._entityKinematic.position);

		// Set velocity along this direction at full speed
		steering.velocity.thisNormalize();
		steering.velocity.thisScale(this._entityKinematic.maxAcceleration);

		steering.rotation = 0;

		return steering;
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeSteeringBehaviourSeek; }