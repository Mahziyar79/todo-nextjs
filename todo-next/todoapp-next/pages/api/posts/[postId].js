export default function handler(req, res) {
    const {query} = req
    res.status(200).json({postId : query.postId});
  }
  