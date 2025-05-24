export default async function handler(req, res) {
  const { ip } = req.query;

  if (!ip) {
    return res.status(400).json({
      success: false,
      message: 'Missing "ip" parameter',
      developer: 'pasindu',
      telegram: 'https://t.me/sl_bjs'
    });
  }

  try {
    const apiKey = 'AE6A0ED4ED4804B50158D0BC36A93F1B'; // Replace with your actual API key
    const response = await fetch(`https://api.ip2location.io/?key=${apiKey}&ip=${ip}&format=json`);
    const data = await response.json();

    if (data.error) {
      return res.status(404).json({
        success: false,
        message: data.error,
        developer: 'pasindu',
        telegram: 'https://t.me/sl_bjs'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        ip: data.ip,
        country: data.country_name,
        region: data.region_name,
        city: data.city_name,
        zip: data.zip_code,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.time_zone,
        local_time: data.time_zone, // You may need to format this based on your requirements
        isp: data.isp,
        domain: data.domain,
        net_speed: data.net_speed,
        idd_code: data.idd_code,
        area_code: data.area_code,
        weather_station: data.weather_station_name,
        elevation: data.elevation,
        usage_type: data.usage_type,
        address_type: data.address_type,
        category: data.category,
        district: data.district,
        asn: data.asn,
        as_name: data.as,
        fraud_score: data.fraud_score,
        is_proxy: data.is_proxy === 'YES',
        proxy_type: data.proxy_type,
        proxy_provider: data.proxy_provider,
        proxy_last_seen: data.proxy_last_seen
      },
      developer: 'pasindu',
      telegram: 'https://t.me/sl_bjs'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      developer: 'pasindu',
      telegram: 'https://t.me/sl_bjs'
    });
  }
}
