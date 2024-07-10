import * as React from "react";
import Footer from "../component/Footer";

export default function MyComponent() {
  return (
    <div style={{ background: "lightblue", padding: "20px 50px" }}>
      <div style={{ maxWidth: "1280px", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              loading="lazy"
              style={{ width: "50px" }}
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be757a926b72cf9dcaa10ce5e381dec90107235599a9e8ed1a578166e3ecc175?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&"
            />
            ERP SYSTEM NWSDB
          </div>
          <img
            loading="lazy"
            style={{ width: "40px" }}
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25dea0f2d67cfbba3040340a7c4bb5513257091198fc3ed313c5f73508cfcd18?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&"
          />
        </div>
        <div
          style={{ display: "flex", maxWidth: "min-content", margin: "auto" }}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6feb706c733f15a34b87117463b43f45456d08ba3e76fff12ae2882adb5a66ed?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&"
          />
          <img
            loading="lazy"
            style={{ width: "1024px" }}
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1c364e77dfc57236b8b52f9eeeeb0165b90f03e9cc9c6a1b2be7b0eea5485?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab88987efa95bd46b9b2bb837de5e703827cb0d94547066a0a67d0b22c1ac1d?apiKey=96d7fdf5d9dc49c7ac534511741a25bc&"
          />
        </div>

        
        <div style={{ maxWidth: "1024px", margin: "auto" }}>
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              boxShadow: "10px 10px 10px gray",
              margin: "50px 0",
              padding: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h2>News & Updates</h2>
                <div
                  style={{ flex: "1", background: "gray", height: "5px" }}
                ></div>
              </div>
              <div />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  style={{
                    display: "flex",
                    flex: "1 1 calc(50% - 60px)",
                    gap: "20px",
                    padding: "20px",
                  }}
                >
                  <img width="90px" height="50px" src="" alt="" />
                  <div>
                    <div>Date</div>
                    <div>Event Name</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              style={{
                color: "white",
                padding: "15px 20px",
                fontWeight: 600,
                width: "max-content",
              }}
            >
              Read More
            </button>
          </div>
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              boxShadow: "10px 10px 10px gray",
              margin: "50px 0",
              padding: "20px",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h2>Upcoming Events</h2>
                <div
                  style={{ flex: "1", background: "gray", height: "5px" }}
                ></div>
              </div>
              <div />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  style={{
                    display: "flex",
                    flex: "1 1 calc(33.33% - 60px)",
                    gap: "20px",
                    padding: "20px",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img width="200px" height="150px" src="" alt="" />
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "100%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>Date</div>
                    <div>
                      <div style={{ fontWeight: 600 }}>Event Name</div>
                      <div>Time</div>
                      <div>Venue</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              style={{
                color: "white",
                padding: "15px 20px",
                fontWeight: 600,
                width: "max-content",
              }}
            >
              View All Events
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
