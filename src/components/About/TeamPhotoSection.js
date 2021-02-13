import React from "react";
import Heading from "../Reuseable/Heading";

export default function TeamPhotoSection() {
  return (
    <div>
      <Heading title="Main Courses" />
      <div class="card-group">
        <div class="card photo-card">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/1092421/pexels-photo-1092421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Block Chain</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 1 hour ago</small>
            </p>
          </div>
        </div>
        <div class="card photo-card">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Code</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 30 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card photo-card">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Design</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 7 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
