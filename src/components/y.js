<Table className="table-striped" align="right" responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>Dibuat Tanggal</th>
                      <th>Hak Akses</th>
                      <th>Tindakan</th>
                      <th>Pilih</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dataPresiden.map((item, i) => (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td className="text-capitalize">{item.username}</td>
                        <td>{item.nama_presiden}</td>
                        <td>{item.nama_wakil}</td>
                        <td>{item.jml_suara}</td>
                        <td>
                          {" "}
                          <img
                            src={`http://localhost:3001${item.img}`}
                            alt=""
                          />{" "}
                          {item.img}
                        </td>
                        <td><Button color="danger" size="lg" onClick={() => this.onHandleVote(item._id)}>
                        Pilih
                      </Button>
                        </td>
                        >
                      </tr>
                    ))}
                  </tbody>
                </Table>