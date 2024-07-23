import Location from "../model/location.js";

export const shareLocation = async (req, res) => {
  try {
    const { userName, userMobile, latitude, longitude } = req.body;
    const location = new Location({ userName, userMobile, latitude, longitude });
    await location.save();
    res.status(200).send('Location shared successfully');
  } catch (error) {
    res.status(500).send('Error sharing location');
  }
};

export const getLocation = async (req, res) => {
  try {
    const location = await Location.findOne({ userMobile: req.params.userMobile }).sort({ createdAt: -1 });
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).send('Location not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving location');
  }
};