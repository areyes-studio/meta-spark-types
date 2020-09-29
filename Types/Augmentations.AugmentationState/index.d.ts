/**
 * `AugmentationState` describes the state of an `Augmentation`
 * @property DOWNLOADED `Augmentation` is downloaded and available for instantiation
 * @property DOWNLOADING `Augmentation` is in the process of being downloaded
 * @property FAILED `Augmentation` download failed
 */
declare interface AugmentationState{
DOWNLOADED,
DOWNLOADING,
FAILED,
}
